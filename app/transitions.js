export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('editor'),
    this.use('fade'),
    this.reverse('fade')
  );
}
