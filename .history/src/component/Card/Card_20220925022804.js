import React from 'react';
import { useDispatch } from 'react-redux';
import { filterArticle, filterAuthorName } from '../../Redux/Action/Action';
const Card = (props) => {
    //getting new date 
    const minute = new Date().getMinutes()
    const { author, blogTitle, category, date, image } = props.blog;
    const dispatch = useDispatch()

    //handle category filter
    const handleCategoryFilter = (categoryText) => {
        dispatch(filterArticle(categoryText))
    }

    // handle fitler functionality with author name and author image 
    const handleFilterWithName = (authorName) => {
        dispatch(filterAuthorName(authorName))
    }
    return (
        <div>
             <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src={image}
                                alt=""
                            />
                        </div>

                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                            <span
                                onClick={()=>handleCategoryFilter(category)}
                                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                                    >
                                        {category}
                                    </span>
                                </p>
                                <a href="#" class="block mt-1">
                                    <p
                                        class="text-xl font-semibold text-gray-900"
                                    >
                                       {blogTitle}
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex items-center cursor-pointer" onClick={()=>handleFilterWithName(author)}>
                                <div class="flex-shrink-0">
                                    <img
                                        class="h-10 w-10 rounded-full"
                                        src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                        alt=""
                                    />
                                </div>
                                <div class="ml-3">
                                    <p
                                        class="text-sm font-medium text-gray-900 hover:underline"
                                    >
                                       {author}
                                    </p>
                                    <div
                                        class="flex space-x-1 text-sm text-gray-500"
                                    >
                                        <time datetime="2020-03-16"
                                            >{date}
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                <span>{minute} reads</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Card;