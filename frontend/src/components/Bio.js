import profilePic from "../static/placeholder.jpg"

const Bio = ({ about }) => {
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
