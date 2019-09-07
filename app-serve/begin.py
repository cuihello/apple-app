from flask import Flask,request
import pymysql
import json
import qrcode
app=Flask(__name__)
@app.route("/login",methods=['POST'])
def login():
    print('进入登陆函数！')
    t=json.loads(request.get_data(as_text=True))
    usename = t['usename']
    password = t['password']
    print(usename,password)
    db = pymysql.connect('localhost', 'root', '123987', 'app_sys')
    cursor = db.cursor()
    sql = """select * from user"""
    try:
        cursor.execute(sql)
        results = cursor.fetchall()
        print(results)
        print(type(results))
        for i in results:
            print(i,i[0],i[1])
            if (usename == i[0]) & (password == i[1]):
                return json.dumps({'state':'success','usename':usename})
    except:
        print('用户名或密码错误!')
    finally:
        db.close()

@app.route('/register',methods=['POST'])
def register():
    print('进入注册函数')
    f = json.loads(request.get_data(as_text=True))
    usename = f['usename']
    password = f['password']
    email=f['email']
    print(usename,password,email)
    ss = "insert into user(usename,password,email) values(%s,%s,%s)"
    sql = """select * from user"""
    db = pymysql.connect('localhost', 'root', '123987', 'app_sys')
    cursor = db.cursor()
    try:
        tem=True
        cursor.execute(sql)
        results = cursor.fetchall()
        print(results)
        for k in results:
            if (usename == k[0]):
                tem=False
                break
        if(tem):
            cursor.execute(ss, (usename, password, email))
            db.commit()
            print('注册成功')
            return json.dumps({'rea':'success'})
        if(not tem):
            print('该用户已存在')
            return json.dumps({'rea':'fail'})
    except:
        print('注册错误')
        db.rollback()
    finally:
        db.close()

@app.route('/getcode',methods=['POST'])
def getcode():
    print('进入获取请求函数')
    mes = json.loads(request.get_data(as_text=True))
    address=mes['address']
    time=mes['time']
    hh=(address,time)
    db = pymysql.connect('localhost', 'root', '123987', 'app_sys')
    cursor = db.cursor()
    sql = """select address,time,count from bus"""
    try:
        cursor.execute(sql)
        results = cursor.fetchall()
        print(results)
        for i in results:
            print( i[0], i[1],i[2])
            if (i[2]>0)&(i[0]==address)&(i[1]==time):
                sql1="""UPDATE bus SET count=count-1 WHERE address=%s and time=%s"""
                cursor.execute(sql1,(address,time))
                qr = qrcode.QRCode(
                    version=1,
                    error_correction=qrcode.constants.ERROR_CORRECT_L,
                    box_size=30,
                    border=12,
                )
                qr.add_data(hh)
                qr.make(fit=True)
                img = qr.make_image()
                images='static/image/'+address+time+'.png'
                img.save(images)
                return json.dumps({'img':images})
    except:
        print('存在错误')
        db.rollback()
    finally:
        db.close()

if __name__=='__main__':
    app.run()