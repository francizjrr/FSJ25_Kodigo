import './style.css'
/**import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'*/

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>Holis desde MainTs</h1>

   <from>

    <section>
      <label>Nombre de usuario</label>
      <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre">
    </section>

    <section>
      <label>Password</label>
      <input type="text" id="nombre" name="nombre" placeholder="Ingrese su Password">
    </section>

    <button type="submit">Iniciar sesión</button>
   </from>

  </div>
`

/** setupCounter(document.querySelector<HTMLButtonElement>('#counter')!) */

//document.querySelector<HTMLElement>("#parrafo")!.innerText = "Esto es texto del p";
cost form = document.getElementById("loginForm") as HTMLFormElement;

form.addEventListener("Submit", () => {


})
