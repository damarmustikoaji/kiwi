require('dotenv').config();
const replaceString = require('replace-string');
const moment  = require('moment-timezone');

const nameService = process.env.SERVICE_NAME;
const grafana = process.env.GRAFANA_URL;
const repoUrl = process.env.REPOSITORY_URL;
const artifacts = `${repoUrl}/-/jobs/${process.env.JOB_ID}/artifacts/download?file_type=archive`;
const squad = process.env.SQUAD;

function convertTZ(date, tzString) {
	return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {timeZone: tzString}));   
}

function mappingReports (data) {
	const stats = data.stats;
	if (stats == undefined) throw Error('stats mochawesome json undefined. please check on reporting');
	const convertStart = convertTZ(moment(stats.start).add(7, 'hours'), 'Asia/Jakarta');
	const startDate = moment(convertStart).format('YYYY-MM-DD HH:mm:ss');
	const convertEnd = convertTZ(moment(stats.end).add(7, 'hours'), 'Asia/Jakarta');
	const endDate = moment(convertEnd).format('YYYY-MM-DD HH:mm:ss');

	const results = data.results;
	if (results == undefined) throw Error('test suites mochawesome json undefined. please check on reporting');
	let payload, describe, testcase, testResult, mappingResults, fileTest, testSteps = [], testList = [], testDetail, endpointList = [];

	const suitesParentList = results[0].suites;
	for(var suitesParent in suitesParentList){
		describe = suitesParentList[suitesParent].title;
		describe = describe.split(' | ');
		if (describe.length < 3) throw Error('format describe not supported. ex: @tag | description | method | path');
		const method = describe[2];
		const description = describe[1];
		const tag = describe[0];
		var path = describe[3];
		var positiveCount = 0;
		var negativeCount = 0;
		if (method == 'GET' || method == 'POST' || method == 'PUT' || method == 'DELETE') {
			const suitesSubList = suitesParentList[suitesParent].suites;
			for(var suitesSub in suitesSubList){
				fileTest = suitesSubList[suitesSub].file;
				const testType = suitesSubList[suitesSub].title ;
				if (testType.includes('Positive')){
					const positiveList = suitesSubList[suitesSub].tests;
					for(var positiveCase in positiveList){
						positiveCount = positiveCount + 1;
						testcase = positiveList[positiveCase].title;
						testcase = testcase.split(' | ');
						if (testcase.length < 3) throw Error('format describe not supported. ex: caseId | case | response code expectation');
						const testTitle = testcase[1];
						const testId = testcase[0];
						const duration = positiveList[positiveCase].duration;
						var statusCase;
						if (positiveList[positiveCase].fail == true) {
							testResult = positiveList[positiveCase].err.message;
							testResult = replaceString(testResult, '"', '');
							testResult = replaceString(testResult, '\'', '');
							statusCase = 'Failed';
						} else {
							testResult = null;
							statusCase = 'Passed';
						}
						payload = {
							'testType': testType,
							'path': path,
							'method': method,
							'testId': testId,
							'case': testTitle,
							'status': statusCase,
							'result': testResult,
							'duration': duration,
							'file': fileTest,
							'tag': tag,
						};
						testList.push(payload);
					}
				}
				fileTest = suitesSubList[suitesSub].file;
				if (testType.includes('Negative')){
					const negativeList = suitesSubList[suitesSub].tests;
					for(var negativeCase in negativeList){
						negativeCount = negativeCount + 1;
						testcase = negativeList[negativeCase].title;
						testcase = testcase.split(' | ');
						if (testcase.length < 3) throw Error(`"${testcase}" format describe not supported. ex: caseId | case | response code expectation`);
						const testTitle = testcase[1];
						const testId = testcase[0];
						const duration = negativeList[negativeCase].duration;
						var statusCase;
						if (negativeList[negativeCase].fail == true) {
							testResult = negativeList[negativeCase].err.message;
							testResult = replaceString(testResult, '"', '');
							testResult = replaceString(testResult, '\'', '');
							statusCase = 'Failed';
						} else {
							testResult = null;
							statusCase = 'Passed';
						}
						payload = {
							'testType': testType,
							'path': path,
							'method': method,
							'testId': testId,
							'case': testTitle,
							'status': statusCase,
							'result': testResult,
							'duration': duration,
							'file': fileTest,
							'tag': tag,
						};
						testList.push(payload);
					}
				}
			}
			const endpointDetail = {
				'method': method,
				'path': path,
				'description': description,
				'positive': positiveCount,
				'negative': negativeCount,
				'tag': tag
			};
			endpointList.push(endpointDetail);
		} else if (method == 'E2E' || method == 'INTEGRATION') {
			fileTest = suitesParentList[suitesParent].file;
			const duration = suitesParentList[suitesParent].duration;
			const testId = describe[3];
			const otherList = suitesParentList[suitesParent].tests;
			for(var OtherCase in otherList){
				testDetail = otherList[OtherCase].title;
				testDetail = testDetail.split(' | ');
				const testTitle = testDetail[1];
				const duration = otherList[OtherCase].duration;
				testResult = otherList[OtherCase].err.message;
				var statusCase;
				if (testResult !== undefined){
					testResult = replaceString(testResult, '"', '');
					testResult = replaceString(testResult, '\'', '');
					statusCase = 'Failed';
				} else {
					testResult = null;
					statusCase = 'Passed';
				}
				const testItem = {
					'step': testTitle,
					'duration': duration,
					'result': testResult
				};
				testSteps.push(testItem);
			}
			payload = {
				'testType': method,
				'testId': testId,
				'case': description,
				'status': statusCase,
				'result': testResult,
				'steps': testSteps,
				'duration': duration,
				'file': fileTest,
				'tag': tag,
			};
			testList.push(payload);
		}
	}

	mappingResults = {
		'squad': squad,
		'service': nameService,
		'testsRegistered': stats.testsRegistered,
		'start': startDate,
		'end': endDate,
		'tests': stats.tests,
		'passes': stats.passes,
		'failures': stats.failures,
		'pending': stats.pending,
		'suites': stats.suites,
		'other': stats.other,
		'skipped': stats.skipped,
		'passPercent': stats.passPercent,
		'duration': stats.duration,
		'pendingPercent': stats.pendingPercent,
		'hasOther': stats.hasOther,
		'hasSkipped': stats.hasSkipped,
		'grafana': grafana,
		'fileReports': artifacts,
		'testcases': testList,
		'endpoints': endpointList
	};

	return mappingResults;
}

module.exports = {
	mappingReports,
	convertTZ
};