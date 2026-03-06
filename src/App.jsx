import { useEffect, useState } from "react"
import Card from "./Card/Card";

function App() {
  const posts =[
    {
      id:1,
      title:'Learning React',
      image:"/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg",
      description:'React makes building UI components easy.',
      date:'2026-2-13',
      category:'Tech'
    },
    {
      id:2,
      title:'Trip to Aswan',
      image:"/dmitrii-zhodzishskii-4rXHE9XeW_A-unsplash.jpg",
      description:'Exploring the beauty of Aswan city',
      date:'2026-2-14',
      category:'Travel'
    },
    {
      id:3,
      title:'Best Pasta Recipe',
      image:"/ben-lei-flFd8L7_B3g-unsplash.jpg",
      description:'Simple and delicious pasta recipe.',
      date:'2026-2-15',
      category:'Food'
    },
    {
      id:4,
      title:'JavaScript Tips & Tricks',
      image:"/growtika-qaedPly-Uro-unsplash.jpg",
      description:'Enhance your JS skills with these handy tips.',
      date:'2026-2-16',
      category:'Tech'
    },
    {
      id:5,
      title:'Exploring Cairo',
      image:"/omar-elsharawy-pwMbtwA9LRc-unsplash.jpg",
      description:'A walk through the streets and history of Cairo.',
      date:'2026-2-17',
      category:'Travel'
    },
    {
      id:6,
      title:'Chocolate Cake Delight',
      image:"/jacob-thomas-6jHpcBPw7i8-unsplash.jpg",
      description:'Rich and moist chocolate cake recipe',
      date:'2026-2-18',
      category:'Food'
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const filteredPosts = posts.filter((post)=>(selectedCategory==='All' || post.category===selectedCategory) &&
  post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const pagination = filteredPosts.slice(indexOfFirstPost,indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postPerPage);

  useEffect(()=>{
    setCurrentPage(1)
  },[selectedCategory,searchTerm])


  return (  
    <>
    <div className='min-h-screen bg-gray-100'>
      <h1 className='text-3xl text-center font-bold py-6'>Abdullah Blog</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-400 block mx-auto mb-5"
      />

      <div className="flex justify-center gap-1 mb-7">
        {['All', 'Tech' , 'Food', 'Travel'].map((category)=>(
          <button key={category} 
          className={`px-4 py-2 rounded-full border cursor-pointer ${selectedCategory===category ? 'bg-blue-500 text-white':'bg-white text-gray-700 border-gray-300 '} hover:bg-blue-400 hover:text-white transition`}
          onClick={()=>setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
        
    
    <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-10 gap-2'>
      {pagination.map((post)=>{
        return (
          <Card key={post.id} post={post}/>
        )
      })}
    </div>
      <div className="mx-auto max-w-3xs flex justify-between items-center">
        <button disabled={currentPage===1} onClick={()=> setCurrentPage(currentPage-1)} className=" cursor-pointer px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-blue-400 hover:text-white transition">Prev</button>
        <span>{currentPage}</span>
        <button disabled={currentPage===totalPages} onClick={()=> setCurrentPage(currentPage+1)} className="cursor-pointer px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-blue-400 hover:text-white transition">Next</button>
      </div>
    </div>
    </>
  )
}

export default App
