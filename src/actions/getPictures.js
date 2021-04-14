import { SUCCESUFULY_LOADED_PICTURES_HOME} from '.'

export const fetchCurrentUserPic =() => {
    return (dispatch) => {

        fetch("http://localhost:3000/home",{
    credentials: "include",
    headers:{
     "Content-Type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(pictures => {
    if(pictures.error){
      alert("Not autorized")
    }else {
      dispatch({
          type: SUCCESUFULY_LOADED_PICTURES_HOME,
          payload: pictures
        })
    }
  })

    }
}
