interface ITodoType {
    task:string;
    isDone:boolean;
    id:string | number; //* id değeri string ya da number olabilir
    owner?: string //! bu alan zorunlu değil, optional. Eğer varsa da type'ı string
}