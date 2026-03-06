import React from 'react'

export default function Card({post}) {
  return <>
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-110 transition cursor-pointer">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                {post.description}
              </p>
              <div className="text-xs text-gray-400 flex justify-between">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
  </>
}
