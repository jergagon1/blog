class ArticlesController < ApplicationController

  def index
    @articles = Article.all
    render json: @articles
  end

  def new
    @article = Article.new
  end

end
