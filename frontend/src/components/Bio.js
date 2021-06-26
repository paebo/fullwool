import profilePic from "../static/d2hgn8z-a19806b0-019c-46ef-8285-c375e945c07b.jpg"

function Bio({ about }) {
    return (
        <div>
            <img src={ profilePic } 
                id="profilePic" 
                height="200px" 
                width="150px" 
                alt="website owner">
            </img>
            <h4>{about.bio}</h4>
        </div>
    );
}

export default Bio;
