const add = {
  t: 'graded',
  rf: 'iSpring Solutions',
  rs: '[Failed] Quiz results: "Untitled Quiz"',
  rc: 'Hello!\n\nHere you can review the quiz results for "Untitled Quiz".',
  rm: {
    PB_PRINT_DATE_TIME_TABLE_LABEL: 'Date/Time:',
    PB_PRINT_STUDENT_SCORE_LABEL: 'Your Score:',
    PB_PRINT_PASSING_SCORE_LABEL: 'Passing Score:',
    PB_PRINT_USER_ID: 'User ID:',
    PB_PRINT_PASSED_QUIZ: 'Passed',
    PB_PRINT_FAILED_QUIZ: 'Failed',
    PB_PRINT_RESULTS_HEADER: 'Quiz Results',
    PB_PRINT_SURVEY_RESULTS_HEADER: 'Survey Results \\',
    PB_PRINT_DETAILED_REPORT_TITLE: 'Detailed Report',
    PB_PRINT_TIME_SPENT: 'Time Spent:',
    PB_PRINT_ANSWERED_QUESTIONS: 'Answered:',
    PB_PRINT_RESULT_BY_SECTION: 'Quiz Sections',
    PB_PRINT_RESULT_BY_QUESTION: 'Questions',
    PB_PRINT_POINTS_TITLE: 'Points',
    PB_PRINT_QUESTION_TITLE: 'Question',
    PB_PRINT_CORRECT: 'Correct',
    PB_PRINT_INCORRECT: 'Incorrect',
    PB_PRINT_PARTIALLY_CORRECT: 'Partially ?orrect',
    PB_PRINT_USER_ANSWER: 'User Answer',
    PB_PRINT_YOUR_ANSWER: 'Your Answer',
    PB_PRINT_CORRECT_ANSWER: 'Correct Answer',
    PB_PRINT_FEEDBACK: 'Feedback',
    PB_PRINT_AWARDED_TITLE: 'Awarded',
    PB_PRINT_RESULT_TITLE: 'Result',
    PB_PRINT_DESTINATION: 'Response Spot',
    PB_PRINT_SURVEY: 'Survey',
    PB_PRINT_ATTEMPTS: 'Attempts',
  },
  ut: '22',
  fut: '22 sec',
  pv: '{}',
  v: '9.0',
  dr: `<quizReport xmlns="http://www.ispringsolutions.com/ispring/quizbuilder/quizresults" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.ispringsolutions.com/ispring/quizbuilder/quizresults quizReport.xsd" version="2"><quizSettings quizType="graded" maxScore="30" maxNormalizedScore="100" timeLimit="0"><passingPercent>80</passingPercent></quizSettings><summary score="20" percent="67" time="22" finishTimestamp="December 23, 2022 12:56 AM" passed="false"/><questions><numericQuestion id="9z2931v7xaod-ds2kvd12nnno" status="correct" evaluationEnabled="true" maxPoints="10" maxAttempts="1" awardedPoints="10" usedAttempts="1" userAnswer="52"><direction><text><![CDATA[What is 19+33?]]></text></direction><feedback><text><![CDATA[That's right! You chose the correct response.]]></text></feedback><answers><equal>52</equal></answers></numericQuestion><numericQuestion id="kfzx7nphmtny-o0cyo6vqp94e" status="incorrect" evaluationEnabled="true" maxPoints="10" maxAttempts="1" awardedPoints="0" usedAttempts="1" userAnswer="78"><direction><text><![CDATA[Divide 49 by 7.]]></text></direction><feedback><text><![CDATA[You did not choose the correct response.]]></text></feedback><answers><equal>7</equal></answers></numericQuestion><trueFalseQuestion id="qwcpdn9ry8ye-432onteijey2" status="correct" evaluationEnabled="true" maxPoints="10" maxAttempts="1" awardedPoints="10" usedAttempts="1"><direction><text><![CDATA[Is 82 - 11 = 71?]]></text></direction><feedback><text><![CDATA[That's right! You chose the correct response.]]></text></feedback><answers correctAnswerIndex="0" userAnswerIndex="0"><answer><text><![CDATA[True]]></text></answer><answer><text><![CDATA[False]]></text></answer></answers></trueFalseQuestion></questions><groups><group name="Question Group 1" passingScore="24" awardedScore="20" passingPercent="80" awardedPercent="66.67" totalQuestions="3" answeredQuestions="2"/></groups></quizReport>`,
  qt: 'Untitled Quiz',
  tp: '30',
  ps: '24',
  psp: '80',
  sp: '20',
  tl: '0',
  drjson: {
    quizReport: {
      quizSettings: {
        passingPercent: '80',
        _quizType: 'graded',
        _maxScore: '30',
        _maxNormalizedScore: '100',
        _timeLimit: '0',
      },
      summary: {
        _score: '20',
        _percent: '67',
        _time: '22',
        _finishTimestamp: 'December 23, 2022 12:56 AM',
        _passed: 'false',
      },
      questions: {
        numericQuestion: [
          {
            direction: {
              text: {
                __cdata: 'What is 19+33?',
              },
            },
            feedback: {
              text: {
                __cdata: "That's right! You chose the correct response.",
              },
            },
            answers: {
              equal: '52',
            },
            _id: '9z2931v7xaod-ds2kvd12nnno',
            _status: 'correct',
            _evaluationEnabled: 'true',
            _maxPoints: '10',
            _maxAttempts: '1',
            _awardedPoints: '10',
            _usedAttempts: '1',
            _userAnswer: '52',
          },
          {
            direction: {
              text: {
                __cdata: 'Divide 49 by 7.',
              },
            },
            feedback: {
              text: {
                __cdata: 'You did not choose the correct response.',
              },
            },
            answers: {
              equal: '7',
            },
            _id: 'kfzx7nphmtny-o0cyo6vqp94e',
            _status: 'incorrect',
            _evaluationEnabled: 'true',
            _maxPoints: '10',
            _maxAttempts: '1',
            _awardedPoints: '0',
            _usedAttempts: '1',
            _userAnswer: '78',
          },
        ],
        trueFalseQuestion: {
          direction: {
            text: {
              __cdata: 'Is 82 - 11 = 71?',
            },
          },
          feedback: {
            text: {
              __cdata: "That's right! You chose the correct response.",
            },
          },
          answers: {
            answer: [
              {
                text: {
                  __cdata: 'True',
                },
              },
              {
                text: {
                  __cdata: 'False',
                },
              },
            ],
            _correctAnswerIndex: '0',
            _userAnswerIndex: '0',
          },
          _id: 'qwcpdn9ry8ye-432onteijey2',
          _status: 'correct',
          _evaluationEnabled: 'true',
          _maxPoints: '10',
          _maxAttempts: '1',
          _awardedPoints: '10',
          _usedAttempts: '1',
        },
      },
      groups: {
        group: {
          _name: 'Question Group 1',
          _passingScore: '24',
          _awardedScore: '20',
          _passingPercent: '80',
          _awardedPercent: '66.67',
          _totalQuestions: '3',
          _answeredQuestions: '2',
        },
      },
      _xmlns: 'http://www.ispringsolutions.com/ispring/quizbuilder/quizresults',
      '_xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      '_xsi:schemaLocation':
        'http://www.ispringsolutions.com/ispring/quizbuilder/quizresults quizReport.xsd',
      _version: '2',
    },
  },
};
