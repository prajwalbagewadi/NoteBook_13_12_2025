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
