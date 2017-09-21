import{ReduseStore}from 'flux/utils';
import dispatcher from '../dispatcher';

class DashboardStore extends ReduseStore{
    getInitialState(){
        return{
            notes:[],//ノート一覧
            selectedNoteId:null,//選択しているノートのid
        };
    }
    reduce(state,action){
      switch(action.type){
          case 'note/create':
              return Object.assign({}, state,{
                  //
                  notes:[action.note,...state.notes],
                  //新規ノートを選択状態にする
                  selectedNoteId: action.note.id,
              });
              default:
              //対応しないtypeのときはもとのstateを返す
              return state;
      }  
    }
}

export default new DashboardStore(dispatcher);

dispatcher.dispatch({
    //新規ノート作成のときのActionの種類
    type: 'note/create',
    //新規ノートのデータ
    note:{
        id:1,
        title:'xxx',
        body:'xxx',
    },
})