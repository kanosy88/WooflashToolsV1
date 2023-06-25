export default function sendRequest(RectoMessage, VersoMessage, courseId) {
  console.log(RectoMessage, VersoMessage, courseId);

  let get = fetch("https://api.wooflash.com/graphql", {
    method: "POST",
    headers: {
      authority: "api.wooflash.com",
      accept: "*/*",
      "accept-language": "fr-FR,fr;q=0.8",
      authorization:
        "Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJhNzBlOTBhMy1mMjFmLTRlN2UtYjdlZC1iZmUyNjkyNTZkZjAiLCJhY2Nlc3NUb2tlbiI6IjA2ZmRhMmQ4M2NjZGMyNDNmMTU1OGI5ODc3YWQ5MzNjMDI5NGE4ODkyN2FhZTc3ZTkyNWUyNTA4ZjkzOTkxYjgiLCJhY2Nlc3NSaWdodHMiOltdLCJpYXQiOjE2ODY0MzU0ODgsImV4cCI6MTY5MTYxOTQ4OCwiYXVkIjoid29vZmxhc2giLCJpc3MiOiJAd29vZmxhc2gvYXV0aCIsInN1YiI6Indvb2ZsYXNoIn0.RScZ2qpGfBL8O8S1cAQDHVhbrHaIbI4kWIXlLKHfVpC6Kjr-pI2Uu-wEh_L4Pz7uBw3A02W7KN-xqUsmVskO6NLhBHMs967RajAg9AZMB4owbSbWbrhdzGy2hXIVI8ixu566mE5rA-OWOrFIxBoP_VdcOPoNNRd_BmuH4LE2NhcV2tGy6XRGM-Ew1oDE75qlan7a4i2UXfu2CIsIIvy5lSNjeELNXKUmaNGWavrN_oak6eEPoTDQwVizYO0o3l_YcmGqT4qavP1gYfEVUWxtmE5ZDc-o3VwA-SY1KYz56c3viswb3sj8qo4rwniB3nVtxFNRPUCacgpsvvn16vptHw",
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
        courseId: "1cdc39c4-8e4b-412a-9258-16a6eac508e7",
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

  get.then((message) => console.log(message.status));
}
