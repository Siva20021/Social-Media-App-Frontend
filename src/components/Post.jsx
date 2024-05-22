import React,{useState} from 'react'
import moment from 'moment'
import { FaComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import ToMessage from './ToMessage';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const Post = ({title,image,content,id,createdAt,likes,comments,username}) => {
	const user=JSON.parse(localStorage.getItem('user'));
	const [open,setOpen]=useState(false);
	const [newCommentMessage, setNewCommentMessage] = useState("");
	const postLike=async(id)=>{
		try{
			const response=await axios.put(`api/posts/like/${id}`,{
				userId:user.id
			});
            if(response.status===200){
                toast.error("Post has disliked");
            }
            else if(response.status===201){
                toast.success("Post has liked");
            }
            else{
                toast.loading('Error');
            }
            
		}catch(err){
			console.log(err);
		}
	}
	const postComment=async(message)=>{
		try{
			const response=await axios.post(`api/posts/comment/${id}`,{
				userId:user.id,
				name:user.username,
				content:message
			});
			console.log(response.data);
		}catch(err){
			console.log(err);
		}
	}
	return (
    
    <div className="flex flex-col w-full md:w-[400px] lg:w-[450px] p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-white ">
    <Toaster
        
        />
    <div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{username}</a>
			<span className="text-xs text-gray-400">{moment(createdAt).fromNow()}</span>
		</div>
	</div>
	<div>
		<img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96" />
		<h2>{title}</h2>
		<p className="text-sm text-gray-400">{content}</p>
	</div>
	<div className="flex flex-wrap justify-between">
		<div className="flex space-x-2 text-sm text-gray-400">
			<button type="button" className="flex items-center p-1 space-x-1.5">
				<FaComment className="w-4 h-4 fill-current text-gray-400 hover:text-[#f91e5a]" onClick={()=>{setOpen(!open)}}/>
				<span>{comments.length}</span>
			</button>
			<button type="button" className="flex items-center p-1 space-x-1.5">
				<BiLike className="w-4 h-4 fill-current text-gray-400 hover:text-[#f91e5a]" onClick={()=>{
					postLike(id);
				}}/>
				<span>{likes.length}</span>
			</button>
		</div>
	</div>
	
	{open && <div>
		<hr className="my-4 border-gray-200" />
		<h1>Comments</h1>
		<div
            className="flex-1 space-y-6 overflow-y-auto rounded-xl  p-4 text-sm leading-6  text-black sm:text-base sm:leading-7"
        >
			{comments.map((comment)=>{
				return <ToMessage comment={comment} key={comment.id} />
			})}
		</div>
		<div className='flex'>

                <label htmlFor="prompt" className="sr-only">Enter your prompt</label>
                <div>
                    <button
                        className=" sm:p-2"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                        </svg>
                        <span className="sr-only">Attach file</span>
                    </button>
                </div>
                <textarea
                    id="prompt"
                    rows="1"
                    className="mx-2 flex min-h-full w-full rounded-md border border-slate-300 bg-slate-200 p-2 text-base text-slate-900 placeholder-slate-400 outline-none"
                    placeholder="Enter your prompt"
                    value={newCommentMessage}
                    onChange={(e) => setNewCommentMessage(e.target.value)}
                />
                <div>
                    <button
                        className="inline-flex text-slate-400 hover:text-blue-600 sm:p-2"
                        onClick={()=>{postComment(newCommentMessage);}}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 14l11 -11"></path>
                            <path
                                d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
                            ></path>
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
                </div>
	</div>}
</div>
  )
}

export default Post