function CategoryButtons ({categoryName = 'Popular', setCategoryName}){
    return(
        <div>
            <button onClick={()=>{
                setCategoryName('Popular')
            }}>Popular</button>
            
            <button onClick={()=>{
                setCategoryName('Now Playing')
            }}>Now Playing</button>

            <button onClick={()=>{
                setCategoryName('Upcoming')
            }}>Upcoming</button>

            <button onClick={()=>{
                setCategoryName('Top Rated')
            }}>Top Rated</button>
        </div>
    )
}
export default CategoryButtons;