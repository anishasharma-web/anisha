const NewBlog = () => {
  
    return (
        <div>
            <h1>Write a blog</h1>
            <div>
                <form >
                    <label ></label>
                    <input type="text" name="title" /><br/><br/>
                   <textarea rows={5} cols={30}/><br/>
                    <input type="submit"  />
                </form>
            </div>
        </div>
    );
};

export default NewBlog;