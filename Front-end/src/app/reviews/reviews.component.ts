import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { Analise, Solicitacao } from './model';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  
  provedores = [];
  analises: Analise [] = [];
  filtro: Analise [] = [];
  solicitacoes: Solicitacao [] = [];
  provedor_id: number;

  analise: Analise = new Analise();

  estrelas: number;

  constructor(
    private service: ReviewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carregar();
    this.listar();
    
    var estrela = document.getElementById("estrela1") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas2") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas3") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas4") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas5") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
  }

  listar(){
    this.analises = [];
    this.service.listaAnalises().then((dados) => {
      this.filtro = dados;
      for (let f of this.filtro){
        if (f.provedor.id == this.provedor_id){
          this.analises.push(f);
        }
      }
    })
    document.getElementById('adicionarAnalise').style.display = "none";
  }

  enviarAnalise(){
    this.service.listaSolicitacoes(this.provedor_id).then((dados)=> {
      this.solicitacoes = dados;
      for (let s of this.solicitacoes){
        if (s.cliente.cpf == this.cpfFormControl.value && s.cliente.nome == this.nomeFormControl.value && s.status != "Pendente"){
          this.analise.cliente = s.cliente;
          this.analise.provedor = s.provedor;
          this.analise.textoAnalise = this.analiseFormControl.value;
          this.analise.estrelas = this.estrelas;
          this.service.adicionarAnalise(this.analise);
        }
      }
    })
  }
  
  adicionarAnalise(){
    if (document.getElementById('listaAnalises') != null){
      document.getElementById('listaAnalises').style.display = "none";
    }
    document.getElementById('adicionarAnalise').style.display = "block";
  }

  carregar(){
    this.service.pesquisar()
    .then((dados)=>{
      this.provedores = dados;
    });    
  }

  nomeFormControl = new FormControl('', [
    Validators.required
  ]);

  cpfFormControl = new FormControl('', [
    Validators.required
  ]);

  analiseFormControl = new FormControl('', [
    Validators.required
  ]);

  set1estrela() {
    this.estrelas = 1;
    var estrela = document.getElementById("estrela1") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas2") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas3") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas4") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas5") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
  }

  set2estrelas() {
    this.estrelas = 2;
    var estrela = document.getElementById("estrela1") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas2") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas3") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas4") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas5") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
  }

  set3estrelas() {
    this.estrelas = 3;
    var estrela = document.getElementById("estrela1") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas2") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas3") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas4") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
    var estrela = document.getElementById("estrelas5") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
  }

  set4estrelas() {
    this.estrelas = 4;
    var estrela = document.getElementById("estrela1") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas2") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas3") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas4") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas5") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Cinza.png"
  }

  set5estrelas() {
    this.estrelas = 5;
    var estrela = document.getElementById("estrela1") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas2") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas3") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas4") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
    var estrela = document.getElementById("estrelas5") as HTMLImageElement;
    estrela.src = "../../assets/Estrela_Amarela.png"
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}
