export class Session {
  public isLogged: boolean;

  constructor(){
    this.isLogged = this.setIsLogged();
  }
  private setIsLogged() {
    if (localStorage.getItem("token")) return true;
    return false;
  }

}
