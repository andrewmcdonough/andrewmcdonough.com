# Hibernate


## <Classname>.hbm.xml

  <?xml version="1.0"?>
  <!DOCTYPE hibernate-mapping PUBLIC
        "-//Hibernate/Hibernate Mapping DTD 2.0//EN"
        "http://hibernate.sourceforge.net/hibernate-mapping-2.0.dtd">
  <hibernate-mapping>
        <class name="uk.co.andrewmcdonough.sub" table="<TABLENAME>">
                <id name="id" column="id" type="long">
                        <generator class="increment"/>
                </id>
                <property name="date" type="timestamp"/>
                <property name="title" column="title"/>
        </class>
  </hibernate-mapping>

## hibernate.cfg.xml
Contains general hibernate configuration

Example:

<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 2.0//EN"
 "http://hibernate.sourceforge.net/hibernate-configuration-2.0.dtd">
<hibernate-configuration>
    <session-factory>
        <property name="hibernate.connection.driver_class">org.hsqldb.jdbcDriver</property>
        <property name="hibernate.connection.url">jdbc:hsqldb:data/test</property>
        <property name="hibernate.connection.username">sa</property>
        <property name="hibernate.connection.password"></property>
        <property name="dialect">net.sf.hibernate.dialect.HSQLDialect</property>
        <property name="show_sql">true</property>
          <property name="transaction.factory_class">
             net.sf.hibernate.transaction.JDBCTransactionFactory
        </property>
        <property name="hibernate.cache.provider_class">
             net.sf.hibernate.cache.HashtableCacheProvider
        </property>
        <property name="hibernate.hbm2ddl.auto">update</property>
        <mapping resource="de/gloegl/road2hibernate/<Classname>.hbm.xml"/>
    </session-factory>
  </hibernate-configuration>



  * Keep the id field private
  * Always use object rather than primitives for the id, i.e. Long rather than long


[http://www.systemmobile.com/articles/IntroductionToHibernate.html](/wiki/http://www.systemmobile.com/articles/introductiontohibernate.html)
[http://www.allapplabs.com/hibernate/hibernate_query_language.htm](/wiki/http://www.allapplabs.com/hibernate/hibernate_query_language.htm)


http://wiki.apache.org/cocoon/CocoonAndHibernateTutorial