import React, {useState} from 'react';

const MovieSave = ({movies})=> {
    const [image,setImage] = useState('');
    const [title,setTitle] = useState('');
    const [subtitle,setSubtitle] = useState('');
    const [descrption,setDescription] = useState('');
    const [movies,setMovies] = useState({movies});
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(image && title && subtitle && descrption){
            const movie = {id:new Date().getTime().toString(),image:image,title:title,subtitle:subtitle,descrption:descrption};
            setMovies((movies)=>{
                return[...movies,movie];
            });
            setImage('');
            setTitle('');
            setSubtitle('');
            setDescription(''); 
        }else{
            alert("empty values");
        }
    };
    return(
        <React.Fragment>
        <article>
        <form onSubmit={handleSubmit}>
            <label>Image:</label>
            <input type="url" value={image} onChange={(e)=>setImage(e.target.value)}></input>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} ></input>
            <label>Subtitle:</label>
            <input type="text" value={subtitle} onChange={(e)=>setSubtitle(e.target.value)}></input>
            <label>Description:</label>
            <input type="text" value={descrption} onChange={(e)=>setDescription(e.target.value)}></input>
            <button type='submit'>save</button>
        </form>
        </article>
        </React.Fragment>

    );

}
export default MovieSave;