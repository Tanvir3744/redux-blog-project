//defining state for the application
let date = new Date();

//convert month number to string
function numberToMonthName(numberOfMonth) {
    date.setMonth(numberOfMonth);
    let currentMonth = date.toLocaleString('en-US', { month: 'short' })
    return currentMonth;
}
const currentDate = numberToMonthName(date.getMonth()) + ',' + date.getDate() + ',' + date.getFullYear();


//initializing the state
const initialState = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        category: 'Technology',
        blogTitle: 'Boost your conversion rate',
        author: 'Biplob Hossen',
        date:currentDate,
    },
    {
        id: 2,
        image: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        category: 'SEO',
        blogTitle: 'How to use search engine optimization to drive sales',
        author: 'Sumit Saha',
        date:currentDate,
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Sales Service',
        blogTitle: 'Improve your customer experience',
        author: 'Jhankar Mahbub',
        date:currentDate,
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Marketing',
        blogTitle: 'How to analyze marketing strategy',
        author: 'Jhankar Mahbub',
        date:currentDate,
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Coding',
        blogTitle: 'Learn code with mentor , Build career',
        author: 'Sumit Saha',
        date:currentDate,
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Computer Hardware',
        blogTitle: 'Learn about computer hardware and data management',
        author: 'Jhankar Mahbub',
        date:currentDate,
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1533309907656-7b1c2ee56ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        category: 'Technology',
        blogTitle: 'What is drone and how does it works',
        author: 'Mark Christian',
        date:currentDate,
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1620778187276-ea6c138e8b94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvY2tjaGFpbiUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        category: 'Blockchain',
        blogTitle: 'How to become a blockchain developer from scratch',
        author: 'Sumit Saha',
        date:currentDate,
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1625806786037-2af608423424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2NrY2hhaW4lMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category: 'Crypto',
        blogTitle: 'How to mine crypto currency',
        author: 'Sumit Saha',
        date:currentDate,
    },
]

export default initialState;