import React from 'react'
import Article from '../Article'


export default function ArticleList({ articles }) {
    const articleElements = articles.map((item, index) =>
    <li key = {item.id}><Article article = {item} defaultOpen = {index === 0}/></li>
    )
    return (
    	<div>
        	{articleElements}
    	</div>
    )
}
