import React from 'react';

function ChatBox() {
  return (
    <div className="w-full h-[70vh]">
        <iframe
            title="Gnostic Inquiry Chat"
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://denser.ai/u/embed/d84bfb5c-74d9-4df1-9857-d37c7e470aff"
            className="rounded-md bg-transparent"
        ></iframe>
    </div>
  );
}

export default ChatBox;