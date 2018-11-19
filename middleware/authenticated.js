const Cookie = process.client ? require('js-cookie') : undefined;

export default function ({ store, redirect, app }) {

  if (!store.state.token) {
    console.log(app);
    return redirect('/connexion')
  }
}
