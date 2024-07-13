import { LoginPageComponent } from './../login-page/login-page.component';
import { UserService } from './../../user.service';
import { TodoService } from './../todo.service';
import { Component,  inject,  OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { OrganismesPageComponent } from '../organismes-page/organismes-page.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { Rapport } from '../../Rapport';
import { RapportService } from '../../rapport.service';
import { ExcelService } from '../../Excel.service';
import { Initr } from '../../Initr';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from '../../logger.service';






@Component({
  selector: 'app-principale-page',
  standalone: true,
  imports: [RouterModule, RouterLink, FooterComponent,OrganismesPageComponent,FormsModule],
  templateUrl: './principale-page.component.html',
  styleUrl: './principale-page.component.css'
})




export class PrincipalePageComponent implements OnInit{

  private UrlCreate = 'https://freeapi.miniprojectideas.com/api/User/CreateNewUser';

  emailUser: string = '';

  emailLoger : string = '';




log = inject(LoggerService) ; 


ajouteruser = false;




  depenseFile : File | null = null ;
  recetteFile : File | null = null ;
  rapports: Rapport[] = [];


  csvRapport: string = '';

  csvrecette : string ='' ;
  csvdepense : string ='' ;

   parsedrecette : any[] = [];

   
  yearofsituation : number = 0 ;


  userObj : User = {
    "userId" : 0,
    "firstName": "",
    "middleName": "",
    "lastName":  "",
   "mobileNo": "",
    "emailId":  "",
    "altMobileNo":  "",
    "password":  ""
  };

  user : User   = {

    userId : 0 ,
    firstName : "",
    middleName : "idontwantto",
    lastName : "",
    mobileNo : "" , 
    emailId  : "", 
    altMobileNo : "",
    password : ""
  }
  userObj1 : User = {
    "userId" : 0,
    "firstName": "",
    "middleName": "",
    "lastName":  "",
   "mobileNo": "",
    "emailId":  "",
    "altMobileNo":  "",
    "password":  ""
  };

  


  nameLogger: string = '';

  lastnameLogger : string = '';



  constructor(  private excelService: ExcelService,
                private rapportService: RapportService)
   { 
    
    }
    http = inject(HttpClient);

  todos: Todo[] =[];
  users: User[] =[];

  

  selectedTodo : Todo = {
    nomorg : '',
    idoforg : '',
    region : '' ,
    ville : '' ,
    tele :'' ,
    email :'' ,
    completed : false 
  };

  user3 : User   = {

    userId : 0 ,
    firstName : "",
    middleName : "idontwantto",
    lastName : "",
    mobileNo : "" , 
    emailId  : "", 
    altMobileNo : "",
    password : ""
  }



  


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnInit(): void {
    this.getAllTodos();
    this.loadRapports();
    this.getAllUsers();
    this.emailLoger = this.log.emailusing;
    this.init();
    
  }

  init(): void {
    this.getUser(this.emailLoger).subscribe({
      next: (data:any) => {
        const user = data[0];
        console.log('Fetched user data:', data); // Check the content of data here
        this.nameLogger = user.firstName ;
        this.lastnameLogger = user.lastName ;
        console.log('nameLogger:', this.nameLogger, 'lastnameLogger:', this.lastnameLogger);
      },
      error: (err) => console.error('Error fetching user:', err)
    });
  }
  
  

  todo : Todo = {
    nomorg : '',
    idoforg : '',
    region : '' ,
    ville : '' ,
    tele :'' ,
    email :'' ,
    completed : false 
  };

  intr1 : Initr = {

    todo : this.selectedTodo,
    depensecsv  : this.csvdepense,
    recettecsv : this.csvrecette ,
    year : this.yearofsituation ,
   
  };
 





  
  selectedTodo1 : Todo = {
    nomorg : '',
    idoforg : '',
    region : '' ,
    ville : '' ,
    tele :'' ,
    email :'' ,
    completed : false 
  };
  selectedTodo2 : Todo = {
    nomorg : '',
    idoforg : '',
    region : '' ,
    ville : '' ,
    tele :'' ,
    email :'' ,
    completed : false 
  };



  //constructor(private todoService : TodoService ){ }
  todoService = inject(TodoService);


  ajouter = false ;

  addTodo() {
    this.todoService.persistTodo(this.todo).subscribe({
      next: (data) => {
       this.todos = [data, ...this.todos],
       this.ajouter=false;
       
      },
      error: () => {
      },
      complete: () => {
        
      }
    })
  }

  getAllTodos(){
    this.todoService.getTodos().subscribe({
    next : (data) => (this.todos = data),
    })
    
  }

  ifnull(d : Todo){
    if(d==null){
      return false ;
    }else{
      return true;
    }

  }

  wannaadd(){
    this.ajouter=true;
  }
  retour1() {
    this.ajouter=false;
    }


  seeDetail = false ;  

    retour2() {
      this.seeDetail = false;
      }

    
      detail(data : Todo) {
        this.selectedTodo2 = data ;
        let {id} = this.selectedTodo2 ;
        this.selectedTodo2 = data;
        this.seeDetail = true;
      }

      supprimer(td : Todo) {
        this.selectedTodo1 = td ;
        const idd = this.selectedTodo1.id ;     
        if(idd != null ){
          
        this.todoService.destroyTodo(idd).subscribe({
          next : () => {
            this.todos = this.todos.filter(todo => todo.id !== idd);
            alert("Vous avez supprimer cet Organisme ");

          }

        })
      }

      }
    
      wannarapport(td : Todo){
        this.selectedTodo = td ;
        const idd = this.selectedTodo.id ;     
      }



/*  convertFilesToCSV(): void {
        if (this.depenseFile) {
          this.excelService.readExcel(this.depenseFile).then(data => {
            this.excelService.convertToCSV(data, 'depense.csv');
          });
        }
        
        if (this.recetteFile) {
          this.excelService.readExcel(this.recetteFile).then(data => {
            this.excelService.convertToCSV(data, 'recette.csv');
          });
        }
      }


      onFileChange1(event : any ): void {

        if(this.selectedTodo.id != null ){
          if (true) {
            this.init1.recettefile = this.recetteFile ;  
            this.init1.todo = this.selectedTodo ;
            console.log(this.init1)                    
          };
        }else{
          alert("selectionner une commune d'abord !");
        }
       
        }

      onFileChange2(event: any): void {
       
        if(this.selectedTodo.id != null ){
          if (true) {
            this.init1.depensefile = this.depenseFile ;

            this.init1.todo = this.selectedTodo ;  
            console.log(this.init1)                    
          };
        }else{
          alert("selectionner une commune d'abord !");
        }
      }


      */






      
      loadRapports(): void {
        this.rapportService.getRapports().subscribe(data => {
          this.rapports = data;
        });
      }
    

      addRapport(rapport: Rapport): void {
        this.rapportService.addRapport(rapport).subscribe(newRapport => {
          this.rapports.push(newRapport);
        });
      }


      isgenerated = false ;
      look = false ; 


      generateRapport(com : Todo, y : number ) {

       this.intr1.todo = com ;
       this.intr1.year = y ;
       this.intr1.depensecsv = this.csvdepense ;
       this.intr1.recettecsv = this.csvrecette   ;
       this.rapportService.addInitr(this.intr1).subscribe({  
        next : () => {
        }
       })

       this.isgenerated = true ; 
      }

      wannasee(){
        if(this.isgenerated){
          this.look = true ;
        }
      }


     /* createEmptyDatai(): emptyDatai {
        return {
            "Situation globale par Chapitre": "",
            "": "",
            "_1": "",
            "_2": "",
            "_3": "",
            "_4": "",
            "_5": "",
            "_6": "",
            "_7": "",
            "_8": "",
            "_9": "",
            "_10": "",
            "_11": "",
            "_12": "",
            "_13": "",
            "_14": "",
            "_15": "",
            "_16": ""
        };
    }

     

      generateCsvRapport(csvRecette: string, csvDepense: string): string {
        
       
       const dataRecette=  Papa.parse(csvRecette, { header: true , skipEmptyLines: false }).data;
        const dataDepense = Papa.parse(csvDepense, { header: true, skipEmptyLines:  false }).data;
        const rapportData: any[] = [];

        console.log(dataRecette); 

        

       // rapportData.push(dataRecette[5]["Situation globale par Chapitre"]); 


        this.csvRapport = Papa.unparse(rapportData);
        this.isgenerated = true ; 
        return Papa.unparse(rapportData);


      }

*/


        onFileChange1(event: any): void {
          const file = event.target.files[0];
          if (file) {
            this.excelService.uploadAndConvert(file).then(() => {
              this.csvrecette = this.excelService.csvContent;
             
            });
          }
        }
        onFileChange2(event: any): void {
          const file = event.target.files[0];
          if (file) {
            this.excelService.uploadAndConvert(file).then(() => {
              this.csvdepense= this.excelService.csvContent;
            });
          }
        }

        userService = inject(UserService);

        

       
      retouruser() {
        this.ajouteruser= false ;
      }
     wannaaddUser() {
        this.ajouteruser = true ;
    }
     ifnulluser(arg0 : User) {
              return true ;
        }


    addUser() { 
      
      
      this.userObj.userId = this.user.userId ; 
          this.userObj.firstName = this.user.firstName ; 
          this.userObj.middleName= this.user.middleName ; 
          this.userObj.lastName = this.user.lastName ; 
          this.userObj.mobileNo = this.user.mobileNo ; 
          this.userObj.emailId = this.user.emailId ; 
          this.userObj.altMobileNo = this.user.altMobileNo ; 
          this.userObj.password = this.user.password ;

        

            
      

          debugger ; 
          this.http.post("https://freeapi.miniprojectideas.com/api/User/CreateNewUser", this.userObj).subscribe({
            next: (res: any) => {
              if (res.result) {
                debugger;        
                this.userService.persistUser(this.user).subscribe({
                  next: (data) => {
                    this.users = [data, ...this.users],
                    this.ajouteruser=false;
                    alert("Added to DataBase ");
                    
                   },
                error: (error: any) => {
                    console.error('Error persisting user', error);
                    alert("Erreur lors de la création de l'utilisateur");
                  }
                });
                console.log("");
                alert("User is created with api succesfully ");
              } else {
                alert(`Error: ${res.message || "Unknown error occurred"}`);
              }
            },
            error: (error) => {
              console.error('Error posting user object', error);
              alert("Erreur lors de l'envoi des informations utilisateur");
            }
          });
        }

        getAllUsers(){
          this.userService.getUsers().subscribe({
            next : (data) => (this.users = data)
            })
          
        }

        user1 : User   = {

          userId : 0 ,
          firstName : "",
          middleName : "idontwantto",
          lastName : "",
          mobileNo : "" , 
          emailId  : "", 
          altMobileNo : "",
          password : ""
        }
      
        
    
    supprimerUser(one : User){
        this.user1 = one;
        const idd = this.user1.id ;     
        if(idd != null ){
          
        this.userService.destroyUser(idd).subscribe({
          next : () => {
            this.users = this.users.filter(user => user.id !== idd);
            alert("l'utilisateur sera supprimée") ;

          }

        })
      }

      }

      getUser(email: string) {
        return this.userService.getUserByEmail(email) 
      }

     
    }
    




 