```
class User {
    private String interest;

    public User() {}

    public String getInterest() {
        return this.interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
    }
}
public class Main {
    public static void main(String[] args) {
        //creating User objects.
        User u1 = new User();
        u1.setInterest("Music");
        User u2 = new User();
        u1.setInterest("Coding");
        User u3 = new User();
        u1.setInterest("Music");
        User u4 = new User();
        u1.setInterest("Gaming");

        //waitQueue for Users.
        User waitQueue[] = new User[4];

        //adding Users to the waitQueue.
        waitQueue[0] = u1;
        waitQueue[1] = u2;
        waitQueue[2] = u3;
        waitQueue[3] = u4;
        
        



    }
}
```
```
// add element to end of the array
class ArrayUtils {
    public static int addElementAtEnd(int arrutil[],int size,int capacity,int value ){
        if(size == capacity){
            System.out.println("array is full.");
        }
        arrutil[size]=value;
        size++;
        return size;
        /*
        note:Both main() and addElement() point to the same array in heap memory.
        */
    }
}

class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        int arr[]=new int[5];
        int size=0;
        size=ArrayUtils.addElementAtEnd(arr,size,arr.length,10);
        System.out.println("arr[0]:"+arr[0]);
        System.out.println("size:"+size);
    }
}
```
```
import java.util.Scanner;

class ArrayUtils {
    public static int addElementAtEnd(int arrutil[],int size,int capacity,int value){
        if(size == capacity){
            System.out.println("couldn't add the value:"+value+" array is full.");
        }
        arrutil[size]=value;
        size++;
        return size;
        /*
        note:Both main() and addElement() point to the same array in heap memory.
        */
    }
}

class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int arr[]=new int[5];
        int size=0;
        int input=0;
        do{
            System.out.println("press 1. to enter value.");
            System.out.println("press 2. to display the array.");
            System.out.println("press 3. to exit.");
            System.out.println("Enter input:");
            input=sc.nextInt();
            switch(input){
                case 1:{
                    System.out.println("Enter value:");
                    int val=sc.nextInt();
                    size=ArrayUtils.addElementAtEnd(arr,size,arr.length,val);
                }
                break;
                case 2:{
                    System.out.println("array:");
                    for(int i=0; i<=size; i++){
                        System.out.print(arr[i]+" ");
                    }
                }
                break;
                case 3:{
                    System.out.println("System has exited");
                }
            }

        }while(input!=3);

    }
}
```
