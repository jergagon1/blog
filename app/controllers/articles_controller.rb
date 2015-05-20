class ArticlesController < ApplicationController

  def index
    @articles = Article.all
    render json: @articles
  end

  def new
    @article = Article.new
  end

  def create
  	article = Article.new(params[:article])
  	if article.save!
  		render json: article
  	else

  	end
  end

  def create
    @article = Article.new(params[:article])
    if @article.save
      render json: @article, status: :created 
    else
      render json: @article.errors, status: :unprocessable_entity 
    end
  end

end
