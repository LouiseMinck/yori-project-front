export default function ({ store, redirect }) {

  if (!store.state.hasplant) {
    return redirect('/Noplant')
  }
}
