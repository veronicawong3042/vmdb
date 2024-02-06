function CategoryButtons ({categoryName = 'Popular', setCategoryName}){
    return(
        <div className="category-buttons">
            <button className='popular-btn' onClick={()=>{
                setCategoryName('Popular')
            }}>Popular</button>
            
            <button className='now-playing-btn' onClick={()=>{
                setCategoryName('Now Playing')
            }}>Now Playing</button>

            <button className='upcoming-btn' onClick={()=>{
                setCategoryName('Upcoming')
            }}>Upcoming</button>

            <button className="top-rated-btn" onClick={()=>{
                setCategoryName('Top Rated')
            }}>Top Rated</button>
        </div>
    )
}
export default CategoryButtons;