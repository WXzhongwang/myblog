const Mock = require('mockjs')
const Random = Mock.Random 
const domain = 'http://mockjs.com/api' 
const code = 200 

const getArticles = req => {
  let articles = [] 

  for (let i = 0; i < 5; i++) {
    let article = {
      id: 1,
      title: Random.csentence(10, 15),
      images: Random.dataImage('65x65', Random.character('upper')),
      desciption: Random.csentence(20, 45),
      tags: "css html",
      author: Random.cname(), 
      date: Random.date("yyyy-MM-dd"),
      thumb:Random.integer(10, 100),
      comment: Random.integer(10, 100),
      view: Random.integer(10, 100)
    }
    articles.push(article)
  }
  return {
   articles
  }
}

Mock.mock(`${domain}/articles`, 'get', getArticles);

