import {BiSearch} from 'react-icons/bi'

const Search = () => {
    return ( 
        <div
          className="
            border-[1px] 
            w-full 
            md:w-auto 
            rounded-full 
            shadow-sm 
            hover:shadow-md 
            transition 
            cursor-pointer
          "
        >
          <div 
            className="
              flex
              flex-row
              items-center
              justify-between
              h-full
            "
          >
            <div 
              className="
                text-sm 
                font-semibold 
                px-6
                py-[11px]
                h-full rounded-full hover:bg-neutral-100 
              "
            >
              Địa điểm
            </div>
            <div 
              className="
                hidden 
                sm:block 
                text-sm 
                font-semibold 
                px-6 
                py-[11px]
                flex-1 
                text-center rounded-full
              hover:bg-neutral-200
                hover:border-none
              "
            >
              Tuần 
            </div>
            <div 
              className="
                text-sm 
                pl-6 
                py-1
                pr-1
                text-gray-600 
                flex 
                flex-row 
                items-center 
                gap-3
              hover:bg-neutral-200 rounded-full
                h-full
              "
            >
              <div className="hidden sm:block">Khách</div>
              <div className="p-2 bg-rose-500 rounded-full text-white">
                <BiSearch size={18}/>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Search;