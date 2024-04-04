import {AiOutlineMenu} from 'react-icons/ai';
import {useCallback, useState} from 'react';

const UserMenu = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(
        () => {
            setIsOpen((value) => !value);
        }
    ,[])

    return(
        <div className="relative">
            <div onClick={toggleOpen} className="flex flex-row p-2 border-[1px]  items-center gap-3 cursor-pointer transition hover:bg-neutral-100 rounded-full">
                <div className="p-1 bg-black text-white rounded-full text-center text-sm h-8 w-8">
                        C
                </div>
                <div className="transition rounded">
                    <AiOutlineMenu/>
                </div>
            </div>
        </div>
    );
}

export default UserMenu;