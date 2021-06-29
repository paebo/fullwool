import placeHolder from "../static/placeholder.jpg"

const Bio = ({ about }) => {
    return (
        <div>
            <img src={ placeHolder } 
                id="profilePic" 
                height="200px" 
                width="250px" 
                alt="website owner">
            </img>
            <h4>{about.bio}</h4>
        </div>
    );
}

export default Bio;
