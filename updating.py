from subprocess import call
from sys import argv

call(["git","add",argv[1]])
call(["git","commit","-m",'"'+argv[1]+' added"'])
call(["git","push"])
