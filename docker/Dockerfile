FROM node:16.14.2

ADD docker/install_and_start.sh /var/run
RUN chmod +x /var/run/install_and_start.sh

WORKDIR /opt/spa
CMD ["/var/run/install_and_start.sh"]