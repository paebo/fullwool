import { useState } from "react"

const BlogPost = ({ title, msg }) => {

    //TODO: The table post needs a date column
    const [isOpen, setIsOpen] = useState(false)

    const openCloseDropdown = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="cardHover blogCard" onClick={openCloseDropdown}>
            <h3>{title}</h3>
            {isOpen && (
                <div className="blogDropdown">
                    {msg}
                </div>
            )}
        </div>
    )
}

export default BlogPost
