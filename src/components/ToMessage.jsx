
import { Tooltip } from 'react-tooltip';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
const ToMessage = ({ comment }) => {
    return (
        <div className="flex items-start">


            <Popover className="relative">
                <PopoverButton><img
                    className="mr-2 h-8 w-8 rounded-full"
                    src="https://source.unsplash.com/100x100/?portrait"
                    id={comment.id}
                /></PopoverButton>
                <PopoverPanel anchor="bottom" className="flex flex-col bg-white rounded-sm p-5">
                    <h1>{comment.name}</h1>
                </PopoverPanel>
            </Popover>
            <div
                className="flex rounded-b-xl rounded-tr-xl bg-slate-200 p-4  sm:max-w-md md:max-w-2xl"

            >
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default ToMessage