FROM python:2.7-jessie

RUN apt-get update
RUN apt-get install -y libgtk-3-dev
RUN apt-get install -y intltool

RUN mkdir -p /opt/build
WORKDIR /opt/build

RUN wget https://github.com/jalvesaq/gconjugue/releases/download/v0.8.3/gconjugue-0.8.3.tar.gz
RUN tar xvzf gconjugue-0.8.3.tar.gz
WORKDIR gconjugue-0.8.3

RUN ./configure --enable-gtkgui=no
RUN cd src/ && \
    sed -i 's/CFLAGS = -g -O2/CFLAGS = -g -O2 -std=c11/g' Makefile

RUN make > /dev/null 2>&1
RUN make install > /dev/null 2>&1

RUN mkdir -p /opt/gconjugue
WORKDIR /opt/gconjugue
