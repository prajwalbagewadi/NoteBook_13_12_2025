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
