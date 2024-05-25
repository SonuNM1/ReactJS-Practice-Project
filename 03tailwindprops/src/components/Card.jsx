import React from 'react';

function Card({username = " Guest ", post = "Not assigned yet", imageUrl}) {

   const defaultImageUrl = "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img 
          className="w-24 h-24 rounded-full mx-auto" 
          src={imageUrl || defaultImageUrl }
          alt={username} 
          width="384" 
          height="512" 
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-s">
              {username}
            </div>
            <div>
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
