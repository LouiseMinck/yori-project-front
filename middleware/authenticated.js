const Cookie = process.client ? require('js-cookie') : undefined;

export default function ({ store, redirect }) {

  if (!store.state.token) {
    return redirect('/connexion')
  }
  if(!process.client){
    console.log("---------------------------------------------------------------------------");
  }
}
