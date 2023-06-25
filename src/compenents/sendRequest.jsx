export default function sendRequest(
  RectoMessage,
  VersoMessage,
  courseId,
  userAuth
) {
  console.log(RectoMessage, VersoMessage, courseId);

  let get = fetch("https://api.wooflash.com/graphql", {
    method: "POST",
    headers: {
      authority: "api.wooflash.com",
      accept: "*/*",
      "accept-language": "fr-FR,fr;q=0.8",
      authorization: "Bearer " + userAuth,
      "content-type": "application/json",
      origin: "https://app.wooflash.com",
      referer: "https://app.wooflash.com/",
      "sec-ch-ua": '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      "x-language": "fr",
    },
    body: JSON.stringify({
      operationName: "QuestionCreate",
      variables: {
        courseId: courseId,
        chapterId: null,
        type: "Flashcard",
        tags: [],
        title: "<p>" + RectoMessage + "</p>",
        content: {
          randomize: false,
          useSpeech: false,
          feedbackLang: "fr-FR",
          titleLang: "fr",
          feedback: "<p>" + VersoMessage + "</p>",
        },
      },
      query:
        "mutation QuestionCreate($courseId: ID!, $chapterId: ID, $type: String!, $tags: [String], $title: String!, $content: JSON!) {\n  questionCreate(\n    courseId: $courseId\n    chapterId: $chapterId\n    type: $type\n    tags: $tags\n    title: $title\n    content: $content\n  ) {\n    ...QuestionData\n    __typename\n  }\n}\n\nfragment QuestionData on Question {\n  id\n  courseId\n  chapterId\n  order\n  type\n  tags\n  title\n  content\n  authorId\n  isAwaitingApproval\n  grade\n  studentFeedback\n  __typename\n}\n",
    }),
  });

  get.then((message) => console.log(message));
}
