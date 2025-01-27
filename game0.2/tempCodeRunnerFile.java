#include<iostream>
using namespace std;
class student 
{
	
private:
char name[20];
int rollno ;
public:
	void setdata()
	{
	
	cout<<"Enter name";
	cin>>name;
	cout<<"Enter roll no";
	cin>>rollno;
}
	void display()
	{
	cout<<"name";
	cout<<rollno;
	}
	

};
class marks:public student
{
	int marks[4];int sum=0;
	public:
		void Marks(){
		
		cout<<"Enter the marks of student";
		for(int i=0;i<4;i++)
		cin>>marks[i];
	}
	void getmarks()
	{
		for(int i=0;i<4;i++)
		{
			int sum=sum+marks[0];
		
		}
	 } 
};
class Activities:public student
{
	int activitypoint;
	public:
		void setactivity()
		{
			cout<<"Enter the activity";
			cin>>activitypoint;
		}
		void disss()
		{
			student::display();
		}

		
	
};
class Examination : public marks, public Activities
{
int result;
public:
void comare(int marks, int point )	
{
	if(marks>200&&point>100){
	
//activities::disss();
cout<<pass;
}
	else
	cout<<fail;
}
};
int main()
{
	Examination ob1,ob2,ob3,ob4,ob5;
	ob1.setdata();
	ob2.setmarks();
	ob3.getmarks();
	ob4.setactivity();
	ob5.comar(ob3 ,ob4)
	
}