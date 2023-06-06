import { useState } from "react";

export default function Blog({posts, categories}) {

    // const categories = props.categories;
    // const posts = props.posts;

    // console.log(posts);
    const [ allPosts, setAllPosts ] = useState(posts.docs);
    const [ sorting, setSorting ] = useState();
    const [ sortedPosts, setSortedPosts ] = useState(posts.docs);

    // console.log(sortedPosts)

    const showAllPosts = event => {
        // console.log(event.currentTarget.id)
        setSortedPosts(allPosts);
        // console.log(sortedPosts);
    }

    const sortPosts = event => {
    // console.log(event.currentTarget.id)
    // setSortedPosts(allPosts);
    // console.log(sortedPosts)
    // setSortedPosts((allPosts) =>
    // allPosts.filter((sortedPosts) => sortedPosts.category.name === event.currentTarget.id)
    // );
    setSortedPosts(allPosts.filter((allPosts) => allPosts.category.name === event.currentTarget.id))
    // console.log(sortedPosts)
    } 


//    async function sortPosts(){
//     setSortedPosts((current) =>
//     current.filter((sortedPosts) => sortedPosts.category.name == 'IoT')
//     );
//     console.log();
//     }

return (
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <div class="inline-flex" role="group">
                <button 
                type="button" 
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                id="all"
                value="all"
                onClick={showAllPosts}
            >
            Alle
            </button>
                {
                    categories.docs.map((item, index) => (
                        // <button
                        //     type="button"
                        //     class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        // >
                        //     {item.name}
                        // </button>
                      
                        <button 
                            type="button" 
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            id={item.name}
                            value={item.name}
                            
                            onClick={sortPosts}
                            key={item.name}
                        >
                        {item.name}
                        </button>

                    ))
                }
            </div>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
            {
                sortedPosts.map((item, index) => (
                <article key={item.id}>
                <div
                    class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href={`/posts/${item.slug}`}>
                        <img
                            class="rounded-t-lg"
                            src={item.url}
                            alt=""
                        />
                    </a>

                    <div class="p-5">
                        <div
                            class="flex justify-between items-center mb-5 text-gray-500"
                        >
                            <span
                                class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                >
                                {item.category.name}
                                </span>
                            
                            <span class="text-sm">{Date(item.publishedDate)}</span>
                        </div>
                        <a href={`/posts/${item.slug}`}>
                            <h5
                                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                                {item.title}
                            </h5>
                        </a>
                        <p
                            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                        >
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a
                            href={`/posts/${item.slug}`}
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-300 dark:focus:ring-green-300"
                        >
                            Read more
                            <svg
                                aria-hidden="true"
                                class="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path></svg
                            >
                        </a>
                    </div>
                </div>
            </article>
                ))
            }
    
        </div>
    </div>
</section>

)
}
