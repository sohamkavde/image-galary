import React from 'react';
import './model.css';
function Model() {
    function closediv(){
        const element = document.getElementById("myDialog");
        element.close();
    }
    
  return (
    <dialog id="myDialog"  style={{ width: "700px", position: "absolute", zIndex: 100 }}>
                    <p style={{textAlign:"right"}}><span style={{border:"2px solid",padding:"2px 4px"}} onClick={()=>closediv()}>X</span></p>
                    <div className="col-12" style={{ width: "100%", height: "300px" }}>
                        <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="img" style={{ width: "100%", height: "100%", objectFit: "contain" }} id='imagepop'/>
                    </div>
                    <div className="col-12 mt-2 d-flex" style={{height:"30px"}}>
                        <div className="col-6 d-flex flex-start">
                            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" style={{ width: "33px", height: "33px", objectFit: "cover", borderRadius: "50%" }} id='pimagepop' />
                            <div className="d-flex flex-column ">
                                <span style={{ color: "#4F4F4F", fontSize: "14px", fontWeight: "700", fontFamily: "Montserrat" }} id='first_last'>soham kavde</span>
                                <span style={{ color: "#A7A7A7", fontSize: "10px", fontWeight: "600", fontFamily: "Poppins" }} id='username'>@soham_kavde</span>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-end"  style={{ color: "#A7A7A7", fontSize: "10px", fontWeight: "600", fontFamily: "Poppins" }}>
                            <span>1.2K downloads</span>
                            &nbsp; &nbsp; &nbsp; <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
    </svg> <span id='likes'></span>k
                            </span>
                        </div>
                    </div>
                        <div className="col-12 mt-4">
                            <div className="col-12 RelatedTags" >
                                Related tags
                            </div>
                            <div className="col-12 d-flex flex-wrap ">
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                                <span className='tags'>Some tags</span>
                            </div>
                        </div>
               


            </dialog>
  )
}

export default Model;
