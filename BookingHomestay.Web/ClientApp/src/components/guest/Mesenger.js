import { ChatList } from "react-chat-elements"
import Container from "../Container";
import "react-chat-elements/dist/main.css";
import { MessageList } from "react-chat-elements";
import { Input } from 'react-chat-elements'
import NavMenu from "../navbar/HostNavMenu";

const Messenger = () => {
    return(
        <div>
            <NavMenu/>
            <div className="pt-[200px] flex flex-row">
                <div className=" max-w-[500px] border-[2px]">
                    <div className=" font-bold text-2xl border-b-[1px]">
                        Tất cả tin nhắn
                    </div>
                    <ChatList
                        className='chat-list'
                        dataSource={[
                            {
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: 'Kursat',
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 3,
                            }
                    ]} />
                    <ChatList
                        className='chat-list'
                        dataSource={[
                            {
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: 'Kursat',
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 3,
                            }
                    ]} />
                    <ChatList
                        className='chat-list'
                        dataSource={[
                            {
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: 'Kursat',
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 3,
                            }
                    ]} />
                </div>
                <div className=" w-full border-[2px]">
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={[
                            {
                                position:"left",
                                type:"text",
                                title:"Kursat",
                                text:"Give me a message list example !",
                            },
                            {
                                position:"right",
                                type:"text",
                                title:"Emre",
                                text:"That's all.",
                            },
                        ]}
                    />
                    <div className="flex flex-col">
                        <Input
                            placeholder="Type here..."
                            multiline={true}
                        />
                        <button className=" bg-neutral-500 w-16 h-12 text-white rounded-md">Gửi</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Messenger;