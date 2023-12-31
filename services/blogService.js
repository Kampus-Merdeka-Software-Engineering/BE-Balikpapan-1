const { prisma } = require('../config/prisma');

//get all articles
async function getArticles() {
  try {
    const blog = await prisma.article.findMany();
    return blog;
  } catch (error) {
    console.log(error);
  }
}

// get an article by id
async function getArticleById(articleId) {
  try {
    const getArticle = await prisma.article.findUnique({
      where: {
        id: Number(articleId)
      }
    })
    return getArticle
  } catch (error) {
    throw new Error(error)
  }
}


module.exports = {
  getArticles,
  getArticleById
};