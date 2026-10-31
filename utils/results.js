

function createSuccessResult(data){
       result = { status :'success', data}
       return result;
}


function createErrorResult(error){
      error ={status:`error`, error}
      return error;
}