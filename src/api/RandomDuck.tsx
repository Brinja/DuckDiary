import React from 'react';
import GateWay from './GateWay';

const GET_RANDOM = 'GET_RANDOM';
const GET_QUACK = 'GET_QUACK';
const GET_RANDOMING = 'GET_RANDOMING';
const GET_LIST = 'GET_LIST';
const POST_UPLOAD_IMAGE = 'POST_UPLOAD_IMAGE';

class RandomDuck extends GateWay {
  getEndPoint(){
    let baseURL = 'https://random-d.uk/api/v2';
    let uploadURL = 'https://random-d.uk/add';

    const { txnType } = super.getDiaryInfo();
    switch (txnType) {
      case GET_RANDOM:
        return baseURL + '/random';
      case GET_QUACK:
        return baseURL + '/quack';
      case GET_RANDOMING:
        return baseURL + '/randomimg';
      case GET_LIST:
        return baseURL + '/list';
      case POST_UPLOAD_IMAGE:
        return uploadURL;
      default:
        break;
    }

    return baseURL;
  }

  checkFetchConitnue(msg)
  {
    if(this.checkTxnTimeout())
    {
      //console.log('checkFetchConitnue time out');
      return false;
    }

    return false;
  }

  getBody()
  {
    const { txnType } = super.getDiaryInfo();

    if(txnType === undefined)
    {
      return this.getSubmitBody();
    }
    else if (txnType === POST_UPLOAD_IMAGE){
      return this.getUploadBody();
    }
    else {
      return this.getSubmitBody();
    }

  }

  getSubmitBody()
  {
    const { user_name, duck_id, breed_id, diary_id, passcode } = super.getDiaryInfo();

    const qrBody = {
      user_name: user_name === undefined ? 'my_user_name' : user_name,
      passcode: passcode === undefined ? 'my_passcode' : passcode,
      diary_id: diary_id === undefined ? 'my_diary_id' : diary_id,
      duck_id: duck_id === undefined ? 'my_duck_id' : duck_id,
      breed_id: breed_id === undefined ? 'breed_id' : breed_id,
    };

    return JSON.stringify(qrBody);
  }

  getUploadBody()
  {
    const { user_name, duck_id, breed_id, diary_id, passcode, uri, type, fileName, fileSize } = super.getDiaryInfo();

    console.log('uri: ' + uri);
    console.log('type: ' + type);
    console.log('name: ' + fileName);
    console.log('fileSize: ' + fileSize);

    var formData = new FormData();

    formData.append('image', {
      uri: uri,
      type: type,
      name: fileName,
      size: fileSize,
    });

    return JSON.stringify(formData);
  }

  async onSubmitAPI(payload)
  {
    super.updateDiaryInfo(payload);

    return super.processToHost().then((response) => {

        return response;
    }).catch((e) =>{

      throw e;
    });

  }

  async onUploadAPI(payload)
  {
    super.updateDiaryInfo(payload);

    return super.uploadToHost(true).then((response) => {

        return response;
    }).catch((e) =>{

      throw e;
    });

  }


}
const randomDuck = new RandomDuck();
export default randomDuck;
